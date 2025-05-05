"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const lodash_1 = __importDefault(require("lodash"));
class MongoFuncHelper {
    async $save(model, entParam) {
        return model.create(entParam);
    }
    async $updateOne(model, conditionObj, newObj) {
        const result = await model.updateOne(conditionObj, newObj);
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }
    async $updateSet(model, filterObj, setObj) {
        const result = await model.updateOne(filterObj, setObj);
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }
    async $findOneAndUpdateOrCreate(model, entParam, filter = {}) {
        const options = { upsert: true, new: true, useFindAndModify: false, setDefaultsOnInsert: true };
        return await model.findOneAndUpdate(filter, entParam, options);
    }
    async $getAll(model, filter = {}, sort = {}, select = {}) {
        const result = await model.find(filter, select).sort(sort).lean();
        if (!result || lodash_1.default.isEmpty(result))
            return [];
        return result;
    }
    async $getById(model, _id, isWithOutCheckDelete = false, select = {}) {
        try {
            let id = "";
            if (mongoose_1.default.isValidObjectId(_id) && typeof _id === "object") {
                id = _id;
            }
            else if (mongoose_1.default.isValidObjectId(_id) && typeof _id === "string") {
                id = this.convertToMongoId(_id);
            }
            const result = await model.findById(id, select);
            if (!result || lodash_1.default.isEmpty(result))
                return {};
            const data = result.toObject();
            if (Boolean(data.$isDeleted) === true && !isWithOutCheckDelete)
                return {};
            return data || {};
        }
        catch (e) {
            return null;
        }
    }
    async $list(model, query = {}, sort = {}, skip = 0, limit = 20, select = {}) {
        skip = Number.isNaN(Number(skip)) || skip < 0 ? 0 : Number(skip);
        limit = Number.isNaN(Number(limit)) || limit < 1 || limit > 1000 ? 20 : Number(limit);
        return await model.find(query, select).sort(sort).skip(skip).limit(limit).lean();
    }
    async $listPaging(model, query = {}, sort = {}, pageIndex = 0, limit = 20, select = {}) {
        pageIndex = Number.isNaN(Number(pageIndex)) || pageIndex < 1 ? 0 : Number(pageIndex) - 1;
        limit = Number.isNaN(Number(limit)) || limit < 1 || limit > 1000 ? 20 : Number(limit);
        const options = {
            select,
            offset: pageIndex * limit,
            limit,
            sort
        };
        return await model.paginate(query, options);
    }
    async $findOne(model, filter, isWithOutCheckDelete = false, select = {}) {
        if (!isWithOutCheckDelete) {
            filter.$isDeleted = { $ne: true };
        }
        const result = await model.findOne(filter, select);
        if (!result || lodash_1.default.isEmpty(result))
            return {};
        const data = result.toObject();
        if (Boolean(data.$isDeleted) === true && !isWithOutCheckDelete)
            return {};
        return data || {};
    }
    async $findOneAndSort(model, filter, isWithOutCheckDelete = false, sorting = {}, select = {}) {
        const result = await model.findOne(filter, select).sort(sorting);
        if (!result || lodash_1.default.isEmpty(result))
            return {};
        const data = result.toObject();
        if (Boolean(data.$isDeleted) === true && !isWithOutCheckDelete)
            return {};
        return data || {};
    }
    async $getLastItem(model) {
        const result = await model.findOne({}).sort({ _id: -1 });
        if (!result || lodash_1.default.isEmpty(result))
            return {};
        const data = result.toObject();
        if (Boolean(data.$isDeleted) === true)
            return {};
        return data || {};
    }
    async $aggregate(model, aggregateFilters = []) {
        return model.aggregate(aggregateFilters);
    }
    async $aggregatePaging(model, aggregateFilters = [], options = { page: 1, limit: 10 }) {
        const aggregate = await model.aggregate(aggregateFilters);
        return model.aggregatePaginate(aggregate, options);
    }
    async $findByListId(model, listId, sort = {}, select = {}) {
        return await model.find({ _id: { $in: listId.map(id => new mongoose_1.Types.ObjectId(id)) } }, select).sort(sort);
    }
    async $setIsActive(model, _id, isActive) {
        const result = await model.updateOne({ _id }, { $set: { isActive } });
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }
    async $setIsDelete(model, _id, isDelete) {
        const result = await model.updateOne({ _id }, { $set: { isDelete } });
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }
    async $getByCode(model, code, select = {}, isWithOutCheckDelete = false) {
        const filter = { code: new RegExp(`^${code}$`, "i") };
        const result = await model.findOne(filter, select);
        if (!result || lodash_1.default.isEmpty(result))
            return {};
        const data = result.toObject();
        if (Boolean(data.$isDeleted) === true && !isWithOutCheckDelete)
            return {};
        return data || {};
    }
    async $getAllDeleteItems(model, filter = {}, sort = {}) {
        filter.$isDeleted = true;
        return await model.find(filter, sort);
    }
    async $count(model, filter = {}) {
        return await model.countDocuments(filter);
    }
    async $saveMany(model, listItem) {
        return await model.insertMany(listItem);
    }
    async $updateMany(model, filterObj, setObj, options = {}) {
        const result = await model.updateMany(filterObj, setObj, options);
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }
    convertToMongoId(params) {
        if (lodash_1.default.isArray(params)) {
            return params.map(id => new mongoose_1.Types.ObjectId(id));
        }
        else if (lodash_1.default.isString(params)) {
            return new mongoose_1.Types.ObjectId(params);
        }
        return params;
    }
    async $findOneAndUpdate(model, filterObj, setObj, options = {}) {
        return await model.findOneAndUpdate(filterObj, setObj, options);
    }
    async $deleteMany(model, filterObj, options = {}) {
        const result = await model.deleteMany(filterObj, options);
        return {
            n: result.acknowledged ? 1 : 0,
            ok: result.acknowledged ? 1 : 0,
            deletedCount: result.deletedCount,
        };
    }
    async $deleteOne(model, filterObj, options = {}) {
        const result = await model.deleteOne(filterObj, options);
        return {
            n: result.acknowledged ? 1 : 0,
            ok: result.acknowledged ? 1 : 0,
            deletedCount: result.deletedCount,
        };
    }
    async $distinct(model, field, filterObj = {}) {
        return model.distinct(field, filterObj);
    }
}
exports.default = MongoFuncHelper;
