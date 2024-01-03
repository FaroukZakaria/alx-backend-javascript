export default function iterateThroughObject(reportWithIterator) {
  const Employee = [];
  for (const report of reportWithIterator) {
    Employee.push(report);
  }
  return Employee.join(' | ');
}
