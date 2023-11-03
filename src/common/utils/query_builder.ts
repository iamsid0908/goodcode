import _ from "lodash";

const QueryBuilder = (queryObject = {}) => {
    let query = queryObject;

    const builder = {
        in(key: string, values: any[]) {
            query[key] = {$in: values};
            return builder;
        },

        or(conditions: object[]) {
            if(_.has(query, '$or') && _.isArray(query['$or'])) {
                query['$or'].push(...conditions);
            } else {
                query['$or'] = conditions;
            }
            return builder;
        },

        and(conditions: object[]) {
            if(_.has(query, '$and') && _.isArray(query['$and'])) {
                query['$and'].push(...conditions);
            } else {
                query['$and'] = conditions;
            }
            return builder;
        },

        where(key: string, value: any) {
            query[key] = value;
            return builder;
        },

        build() {
            return query;
        }
    }

    return builder;
}

export default QueryBuilder