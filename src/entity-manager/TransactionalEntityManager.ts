/** @prettier */

import { EntityManager } from "./EntityManager";

/**
 * TransactionalEntityManager represents an EntityManager which is currently in
 * a transaction
 */
export type TransactionalEntityManager = EntityManager & {
  /**
   * Do not use this field, as it's never actually set. It's needed to ensure
   * that TransactionalEntityManager isn't assignable to EntityManager
   * (structural typing)
   */
  transactional: any;
};
