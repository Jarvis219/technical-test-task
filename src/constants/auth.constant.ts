export const getSignatureMessage = (address: string): string => {
  return `Welcome to test technical!
  
  By clicking [Sign] button below, I hereby agree to and accept the test technical Terms and Conditions and Privacy Policy
  
  Your wallet address: ${address}
  
  This request WILL NOT trigger any blockchain transaction or cost any gas fees.`
}
