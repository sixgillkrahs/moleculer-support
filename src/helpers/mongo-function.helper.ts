import mongoose, { Model, FilterQuery, UpdateQuery, Document, Types, HydratedDocument, ModifyResult } from "mongoose";
import _ from "lodash";


class MongoFuncHelper {
    async $save<T extends Document>(model: Model<T>, entParam: Partial<T>): Promise<T> {
        return model.create(entParam);
    }

    async $updateOne<T extends Document>(model: Model<T>, conditionObj: FilterQuery<T>, newObj: UpdateQuery<T>) {
        const result = await model.updateOne(conditionObj, newObj);
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }

    async $updateSet<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, setObj: UpdateQuery<T>) {
        const result = await model.updateOne(filterObj, setObj);
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }

    async $findOneAndUpdateOrCreate<T extends Document>(model: Model<T>, entParam: Partial<T>, filter: FilterQuery<T> = {}): Promise<T | null> {
        const options = { upsert: true, new: true, useFindAndModify: false, setDefaultsOnInsert: true };
        return await model.findOneAndUpdate(filter, entParam, options);
    }

    async $getAll<T extends Document>(model: Model<T>, filter: FilterQuery<T> = {}, sort: any = {}, select: any = {}): Promise<T[]> {
        const result = await model.find(filter, select).sort(sort).lean() as T[];
        if (!result || _.isEmpty(result)) return [];
        return result;
    }

    async $getById<T extends Document>(model: Model<T>, _id: any, isWithOutCheckDelete = false, select: any = {}): Promise<any> {
        try {
            let id: any = "";
            if (mongoose.isValidObjectId(_id) && typeof _id === "object") {
                id = _id;
            } else if (mongoose.isValidObjectId(_id) && typeof _id === "string") {
                id = this.convertToMongoId(_id);
            }
            const result = await model.findById(id, select);
            if (!result || _.isEmpty(result)) return {};
            const data = result.toObject();
            if (Boolean(data.$isDeleted) === true && !isWithOutCheckDelete) return {};
            return data || {};
        } catch (e) {
            return null;
        }
    }

    async $list<T extends Document>(
        model: Model<T>,
        query: FilterQuery<T> = {},
        sort: any = {},
        skip = 0,
        limit = 20,
        select: any = {}
    ): Promise<any[]> {
        skip = Number.isNaN(Number(skip)) || skip < 0 ? 0 : Number(skip);
        limit = Number.isNaN(Number(limit)) || limit < 1 || limit > 1000 ? 20 : Number(limit);
        return await model.find(query, select).sort(sort).skip(skip).limit(limit).lean();
    }

    async $listPaging<T extends Document>(model: any, query: FilterQuery<T> = {}, sort: any = {}, pageIndex = 0, limit = 20, select: any = {}): Promise<any> {
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

    async $findOne<T extends Document>(model: Model<T>, filter: FilterQuery<T>, isWithOutCheckDelete = false, select: any = {}): Promise<any> {
        if (!isWithOutCheckDelete) {
            filter.$isDeleted = { $ne: true } as any;
        }
        const result = await model.findOne(filter, select);
        if (!result || _.isEmpty(result)) return {};
        const data = result.toObject();
        if (Boolean(data.$isDeleted) === true && !isWithOutCheckDelete) return {};
        return data || {};
    }

    async $findOneAndSort<T extends Document>(model: Model<T>, filter: FilterQuery<T>, isWithOutCheckDelete = false, sorting: any = {}, select: any = {}): Promise<any> {
        const result = await model.findOne(filter, select).sort(sorting);
        if (!result || _.isEmpty(result)) return {};
        const data = result.toObject();
        if (Boolean(data.$isDeleted) === true && !isWithOutCheckDelete) return {};
        return data || {};
    }

    async $getLastItem<T extends Document>(model: Model<T>): Promise<any> {
        const result = await model.findOne({}).sort({ _id: -1 });
        if (!result || _.isEmpty(result)) return {};
        const data = result.toObject();
        if (Boolean(data.$isDeleted) === true) return {};
        return data || {};
    }

    async $aggregate<T extends Document>(model: Model<T>, aggregateFilters: any[] = []): Promise<any[]> {
        return model.aggregate(aggregateFilters);
    }

    async $aggregatePaging<T extends Document>(model: any, aggregateFilters: any[] = [], options: any = { page: 1, limit: 10 }): Promise<any> {
        const aggregate = await model.aggregate(aggregateFilters);
        return model.aggregatePaginate(aggregate, options);
    }

    async $findByListId<T extends Document>(model: Model<T>, listId: string[], sort: any = {}, select: any = {}): Promise<T[]> {
        return await model.find({ _id: { $in: listId.map(id => new Types.ObjectId(id)) } }, select).sort(sort);
    }

    async $setIsActive<T extends Document>(model: Model<T>, _id: string | Types.ObjectId, isActive: boolean) {
        const result = await model.updateOne({ _id }, { $set: { isActive } });
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }

    async $setIsDelete<T extends Document>(model: Model<T>, _id: string | Types.ObjectId, isDelete: boolean) {
        const result = await model.updateOne({ _id }, { $set: { isDelete } });
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }

    async $getByCode<T extends Document>(model: Model<T>, code: string, select: any = {}, isWithOutCheckDelete = false): Promise<any> {
        const filter = { code: new RegExp(`^${code}$`, "i") } as FilterQuery<T>;
        const result = await model.findOne(filter, select);
        if (!result || _.isEmpty(result)) return {};
        const data = result.toObject();
        if (Boolean(data.$isDeleted) === true && !isWithOutCheckDelete) return {};
        return data || {};
    }

    async $getAllDeleteItems<T extends Document>(model: Model<T>, filter: FilterQuery<T> = {}, sort: any = {}): Promise<T[]> {
        filter.$isDeleted = true as any;
        return await model.find(filter, sort);
    }

    async $count<T extends Document>(model: Model<T>, filter: FilterQuery<T> = {}): Promise<number> {
        return await model.countDocuments(filter);
    }

    async $saveMany<T extends Document>(model: Model<T>, listItem: Partial<T>[]): Promise<HydratedDocument<T>[]> {
        return await model.insertMany(listItem) as HydratedDocument<T>[];
    }

    async $updateMany<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, setObj: UpdateQuery<T>, options: any = {}) {
        const result = await model.updateMany(filterObj, setObj, options);
        return {
            ok: result.acknowledged ? 1 : 0,
            n: result.matchedCount,
            nModified: result.modifiedCount,
        };
    }

    convertToMongoId(params: string[] | string): Types.ObjectId[] | Types.ObjectId {
        if (_.isArray(params)) {
            return params.map(id => new Types.ObjectId(id));
        } else if (_.isString(params)) {
            return new Types.ObjectId(params);
        }
        return params;
    }

    async $findOneAndUpdate<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, setObj: UpdateQuery<T>, options: any = {}): Promise<ModifyResult<T> | null> {
        return await model.findOneAndUpdate(filterObj, setObj, options);
    }

    async $deleteMany<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, options: any = {}) {
        const result = await model.deleteMany(filterObj, options);
        return {
            n: result.acknowledged ? 1 : 0,
            ok: result.acknowledged ? 1 : 0,
            deletedCount: result.deletedCount,
        };
    }

    async $deleteOne<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, options: any = {}) {
        const result = await model.deleteOne(filterObj, options);
        return {
            n: result.acknowledged ? 1 : 0,
            ok: result.acknowledged ? 1 : 0,
            deletedCount: result.deletedCount,
        };
    }

    async $distinct<T extends Document>(model: Model<T>, field: string, filterObj: FilterQuery<T> = {}) {
        return model.distinct(field, filterObj);
    }
}

export default MongoFuncHelper;
