export type EditorialRole = 'LASARE' | 'REDAKTOR' | 'ADMINISTRATOR';

export type EditorialPermission =
  | 'VIEW_PUBLIC'
  | 'VIEW_EDITORIAL'
  | 'REVIEW_CANDIDATES'
  | 'EDIT_ARTICLES'
  | 'PUBLISH_ARTICLES'
  | 'VIEW_AUDIT'
  | 'HANDLE_ALERTS'
  | 'MANAGE_USERS';

const permissions: Record<EditorialRole, EditorialPermission[]> = {
  LASARE: ['VIEW_PUBLIC'],
  REDAKTOR: ['VIEW_PUBLIC', 'VIEW_EDITORIAL', 'REVIEW_CANDIDATES', 'EDIT_ARTICLES', 'PUBLISH_ARTICLES', 'VIEW_AUDIT', 'HANDLE_ALERTS'],
  ADMINISTRATOR: ['VIEW_PUBLIC', 'VIEW_EDITORIAL', 'REVIEW_CANDIDATES', 'EDIT_ARTICLES', 'PUBLISH_ARTICLES', 'VIEW_AUDIT', 'HANDLE_ALERTS', 'MANAGE_USERS'],
};

export function can(role: EditorialRole, permission: EditorialPermission) {
  return permissions[role].includes(permission);
}

export function permissionsFor(role: EditorialRole) {
  return [...permissions[role]];
}
