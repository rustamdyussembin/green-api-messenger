export const getChatId = (phoneNumber: string): string => {
  const normalizedPhone = phoneNumber.replace(/\D/g, '');

  return `7${normalizedPhone}@c.us`;
};

export const getPhoneNumber = (chatId: string): string => {
  return chatId.replace(/@c\.us$/, '');
};
