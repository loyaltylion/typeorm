import {BaseConnectionOptions} from "../../connection/BaseConnectionOptions";
import {PostgresConnectionCredentialsOptions} from "./PostgresConnectionCredentialsOptions";

/**
 * Postgres-specific connection options.
 */
export interface PostgresConnectionOptions extends BaseConnectionOptions, PostgresConnectionCredentialsOptions {

    /**
     * Database type.
     */
    readonly type: "postgres";

    /**
     * Schema name.
     */
    readonly schema?: string;

    /**
     * Disable built-in connection pooling
     */
    readonly disablePooling?: boolean;

    /**
     * Replication setup.
     */
    readonly replication?: {

        /**
         * Master server used by orm to perform writes.
         */
        readonly master: PostgresConnectionCredentialsOptions;

        /**
         * List of read-from severs (slaves).
         */
        readonly slaves: PostgresConnectionCredentialsOptions[];

    };

}