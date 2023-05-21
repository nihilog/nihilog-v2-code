export function getContrast(bgColor: string): string {
  bgColor = bgColor.replace('#', '');

  return (parseInt(bgColor, 16) > 0xffffff / 2) ? '#000000' : '#ffffff';
}
