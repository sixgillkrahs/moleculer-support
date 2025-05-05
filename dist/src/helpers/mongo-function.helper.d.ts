import mongoose, { Model, FilterQuery, UpdateQuery, Document, Types, HydratedDocument, ModifyResult } from "mongoose";
declare class MongoFuncHelper {
    static $save<T extends Document>(model: Model<T>, entParam: Partial<T>): Promise<T>;
    static $updateOne<T extends Document>(model: Model<T>, conditionObj: FilterQuery<T>, newObj: UpdateQuery<T>): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    static $updateSet<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, setObj: UpdateQuery<T>): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    static $findOneAndUpdateOrCreate<T extends Document>(model: Model<T>, entParam: Partial<T>, filter?: FilterQuery<T>): Promise<T | null>;
    static $getAll<T extends Document>(model: Model<T>, filter?: FilterQuery<T>, sort?: any, select?: any): Promise<T[]>;
    static $getById<T extends Document>(model: Model<T>, _id: any, isWithOutCheckDelete?: boolean, select?: any): Promise<any>;
    static $list<T extends Document>(model: Model<T>, query?: FilterQuery<T>, sort?: any, skip?: number, limit?: number, select?: any): Promise<any[]>;
    static $listPaging<T extends Document>(model: any, query?: FilterQuery<T>, sort?: any, pageIndex?: number, limit?: number, select?: any): Promise<any>;
    static $findOne<T extends Document>(model: Model<T>, filter: FilterQuery<T>, isWithOutCheckDelete?: boolean, select?: any): Promise<any>;
    static $findOneAndSort<T extends Document>(model: Model<T>, filter: FilterQuery<T>, isWithOutCheckDelete?: boolean, sorting?: any, select?: any): Promise<any>;
    static $getLastItem<T extends Document>(model: Model<T>): Promise<any>;
    static $aggregate<T extends Document>(model: Model<T>, aggregateFilters?: any[]): Promise<any[]>;
    static $aggregatePaging<T extends Document>(model: any, aggregateFilters?: any[], options?: any): Promise<any>;
    static $findByListId<T extends Document>(model: Model<T>, listId: string[], sort?: any, select?: any): Promise<T[]>;
    static $setIsActive<T extends Document>(model: Model<T>, _id: string | Types.ObjectId, isActive: boolean): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    static $setIsDelete<T extends Document>(model: Model<T>, _id: string | Types.ObjectId, isDelete: boolean): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    static $getByCode<T extends Document>(model: Model<T>, code: string, select?: any, isWithOutCheckDelete?: boolean): Promise<any>;
    static $getAllDeleteItems<T extends Document>(model: Model<T>, filter?: FilterQuery<T>, sort?: any): Promise<T[]>;
    static $count<T extends Document>(model: Model<T>, filter?: FilterQuery<T>): Promise<number>;
    static $saveMany<T extends Document>(model: Model<T>, listItem: Partial<T>[]): Promise<HydratedDocument<T>[]>;
    static $updateMany<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, setObj: UpdateQuery<T>, options?: any): Promise<{
        ok: number;
        n: number;
        nModified: number;
    }>;
    static convertToMongoId(params: string[] | string): Types.ObjectId[] | Types.ObjectId;
    static $findOneAndUpdate<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, setObj: UpdateQuery<T>, options?: any): Promise<ModifyResult<T> | null>;
    static $deleteMany<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, options?: any): Promise<{
        n: number;
        ok: number;
        deletedCount: number;
    }>;
    static $deleteOne<T extends Document>(model: Model<T>, filterObj: FilterQuery<T>, options?: any): Promise<{
        n: number;
        ok: number;
        deletedCount: number;
    }>;
    static $distinct<T extends Document>(model: Model<T>, field: string, filterObj?: FilterQuery<T>): Promise<(string extends infer T_1 ? T_1 extends string ? T_1 extends keyof T | mongoose.NestedPaths<Required<T>, keyof T> ? mongoose.WithoutUndefined<mongoose.Unpacked<mongoose.WithLevel1NestedPaths<T, keyof T>[T_1]>> : unknown : never : never)[]>;
}
export default MongoFuncHelper;
