const countdown = () => {
    const endDate = new Date('Feb 11, 2022 21:38:00').getTime()
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

    

    document.getElementById('days').innerHTML = timeDays
    document.getElementById('hours').innerHTML = timeHours
    document.getElementById('minutes').innerHTML = timeMinutes
    document.getElementById('seconds').innerHTML = timeSeconds
}
countdown()