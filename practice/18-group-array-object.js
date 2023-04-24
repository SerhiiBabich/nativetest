// O(n) time | O(n) space
const groupOnlyMatureStudentsByGroup = (students) =>
	students.reduce(
		(acc, student) =>
			student.age < 18
				? acc
				: acc[student.groupId]
				? acc[student.groupId].push(student) && acc
				: (acc[student.groupId] = [student]) && acc,
		{}
	);
