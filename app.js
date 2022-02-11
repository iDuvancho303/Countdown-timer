const countdown = () => {
    const endDate = new Date(' Monday May 30, 2022 00:00:00').getTime()
    const now = new Date().getTime()
    
    const difference = endDate - now

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    const timeDays = Math.floor(difference / days)
    const timeHours = Math.floor((difference % days) / hours)
    const timeMinutes = Math.floor((difference % hours) / minutes)
    const timeSeconds = Math.floor((difference % minutes) / seconds)

    console.log(timeSeconds);
}
countdown()