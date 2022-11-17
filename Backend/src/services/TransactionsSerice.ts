import Accounts from "../database/models/Accounts";

const editBalance = async (getDebitedId: number, getCreditedId: number, value: number) => {
  const getDebitedAccount = await Accounts.findOne({ where: { id: getDebitedId } });

  const getCreditedAccount = await Accounts.findOne({ where: { id: getCreditedId } });

  if (getDebitedAccount && getCreditedAccount) {
    await Accounts.update(
      { balance: Number(getDebitedAccount.balance) + value },
      { where: { id: getDebitedId } }
    )

    await Accounts.update(
      { balance: Number(getCreditedAccount.balance) - value },
      { where: { id: getCreditedId } }
    )
  }

}

export default editBalance;