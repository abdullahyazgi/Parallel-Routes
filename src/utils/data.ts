export async function getOrderCountFromDB() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "Orders: 34"
}

export async function getSalesFromDB() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "Sales: $7,98.00";
}


export async function getProfitFromDB() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "Profit: $3,150.00";
}


export function getUser() {
    return {
        isAdmin: true,
        isManager: true,
        id: 10
    }
}