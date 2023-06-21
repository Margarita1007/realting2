export function getCurrency(currApi: string) {
    switch (currApi.toLowerCase()) {
        case 'usd':
            return '$';
          case 'eur':
            return '€';
          case 'gbp':
            return '£';
          case 'jpy':
            return '¥';
          case 'try':
            return '₺';
        default:
          return currApi;
      }
}
