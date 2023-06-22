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

export const findCenter: (coordinates: [number, number][]) => [number, number] = (coordinates: [number, number][]) => {
  if (coordinates.length === 0) {
    return [0, 0];
  }

  let sumLat = 0;
  let sumLng = 0;

  for (let i = 0; i < coordinates.length; i++) {
    sumLat += coordinates[i][0];
    sumLng += coordinates[i][1];
  }

  const centerLat = sumLat / coordinates.length;
  const centerLng = sumLng / coordinates.length;

  return [centerLat, centerLng];
};