export function sleep(timeInSeconds = 5) {
  const ms = (timeInSeconds * 1000);

  console.log(`SLEEP ${ms}`)
  return new Promise(resolve => setTimeout(resolve, ms));
}
