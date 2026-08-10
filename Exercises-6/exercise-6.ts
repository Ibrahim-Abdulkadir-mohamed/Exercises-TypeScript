// 1. UserRole Enum Usage


enum UserRole { SUPERADMIN = "superadmin",  MODERATOR = "moderator",  VIEWER = "viewer"}

function canEdit(role: UserRole): boolean {
    return role !== UserRole.VIEWER;
}

console.log(canEdit(UserRole.SUPERADMIN));
console.log(canEdit(UserRole.MODERATOR));
console.log(canEdit(UserRole.VIEWER));

// 2. Type Assertion with as

const button = document.querySelector('button') as HTMLButtonElement;
button.disabled = true;

console.log(button.disabled);