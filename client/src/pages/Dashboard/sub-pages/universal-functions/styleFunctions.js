import { moneyBuddyTheme } from "../../../../modules/themeAndStyles"
const { rowColor, offRowColor} = moneyBuddyTheme

export const pickColor = (index) => (index % 2 === 0) ? rowColor : offRowColor