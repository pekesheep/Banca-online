export const mapTransferFromApiToViewModel = account => {
    return {
      ...account,
      alias: account.name,
    };
  };