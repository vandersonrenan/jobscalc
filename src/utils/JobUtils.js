module.exports = {
  remainingDays(job) {
    // calculo de tempo restante
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()

    const createdDate = new Date(job.createdAt)
    const dueDay = createdDate.getDate() + Number(remainingDays)
    const dueDateIsMs = createdDate.setDate(dueDay)

    const timeDiffIsMs = dueDateIsMs - Date.now()
    // transformar ms em dias
    const dayInMs = 1000 * 60 * 60 * 24
    const dayDiff = Math.floor(timeDiffIsMs / dayInMs)

    // restam x dias
    return dayDiff
  },
  calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}