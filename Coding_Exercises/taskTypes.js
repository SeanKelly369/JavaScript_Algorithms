function tasksTypes(deadlines, day){
  let today = 0, upcoming = 0, later = 0;

  deadlines.forEach((deadline) => {
    if (deadline <= day){
        today++;
    } else if ( deadline >= day-1 && deadline <= day + 7) {
        upcoming++;
    } else {
        later++;
    }
  });
  let tasks = [today,upcoming,later];
  console.log(tasks);
  return tasks;
}

tasksTypes([1,2,3,4,5], 3);
