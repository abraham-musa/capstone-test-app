import Observable from 'zen-observable-ts';
import { InternalSchema, ModelInstanceMetadata, SchemaModel, ModelPredicate, AuthModeStrategy, ErrorHandler, AmplifyContext } from '../../types';
declare class SyncProcessor {
    private readonly schema;
    private readonly syncPredicates;
    private readonly amplifyConfig;
    private readonly authModeStrategy;
    private readonly errorHandler;
    private readonly amplifyContext;
    private readonly typeQuery;
    constructor(schema: InternalSchema, syncPredicates: WeakMap<SchemaModel, ModelPredicate<any>>, amplifyConfig: Record<string, any>, authModeStrategy: AuthModeStrategy, errorHandler: ErrorHandler, amplifyContext: AmplifyContext);
    private generateQueries;
    private graphqlFilterFromPredicate;
    private retrievePage;
    private partialDataFeatureFlagEnabled;
    private jitteredRetry;
    start(typesLastSync: Map<SchemaModel, [string, number]>): Observable<SyncModelPage>;
}
export declare type SyncModelPage = {
    namespace: string;
    modelDefinition: SchemaModel;
    items: ModelInstanceMetadata[];
    startedAt: number;
    done: boolean;
    isFullSync: boolean;
};
export { SyncProcessor };
