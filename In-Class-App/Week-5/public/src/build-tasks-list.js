/**
 * html structure
 *
 * @example
 * <ul class="tasks-list">
 *  <li class="task-item">
 *    <div class="task-item-block">
 *      <span class="task-checkbox"><input type="checkbox"></span>
 *      <span class="task-name">Task name</span>
 *      <span class="task-status">pending</span>
 *      <span class="task-date">date create</span>
 *    </div>
 *  </li>
 * </ul>
 */

// This is an IIFE (Immediately Invoked Function Expression).
// What it does is in the name.
(async () => {
    const tasks = await getTasks();
    console.log(tasks);

    if (tasks.length) {

        const pendingDiv = document.getElementById('pendingTasks');
        const completedDiv = document.getElementById('completedTasks');

        const pendingHeader = document.createElement('h1');
        pendingHeader.innerText = "Pending Tasks";

        const completedHeader = document.createElement('h1');
        completedHeader.innerText = "Completed Tasks";

        pendingDiv.prepend(pendingHeader);
        completedDiv.prepend(completedHeader);

        const loadingDiv = pendingDiv.childNodes[2];
        const emptyDiv = completedDiv.childNodes[1];

        const pendingUL = document.createElement('ul');
        const completedUL = document.createElement('ul');

        // replace 'loading...' with list
        pendingDiv.replaceChild(pendingUL, loadingDiv); // <- order is important here!
        completedDiv.replaceChild(completedUL, emptyDiv);


        // create the list
        tasks.map((task) => {
            if (task.status === 'pending') {
                // building blocks
                const pendingLI = document.createElement('li');
                pendingLI.className = 'task-item';
                const pendingBlock = document.createElement('div');
                pendingBlock.className = 'task-item-block';

                //   content
                const checkboxSpan = document.createElement('span');
                const checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkboxSpan.className = 'task-checkbox';
                checkboxSpan.appendChild(checkbox);

                const nameSpan = document.createElement('span');
                nameSpan.className = 'task-name';
                nameSpan.innerText = task.name;

                const statusSpan = document.createElement('span');
                statusSpan.className = 'task-status';
                statusSpan.innerText = task.status;

                const dateSpan = document.createElement('span');
                dateSpan.className = 'task-date';
                dateSpan.innerText = task.created_date;

                // add list item
                pendingBlock.appendChild(checkboxSpan);
                pendingBlock.appendChild(nameSpan);
                pendingBlock.appendChild(statusSpan);
                pendingBlock.appendChild(dateSpan);

                pendingLI.appendChild(pendingBlock);
                pendingUL.appendChild(pendingLI);
            } else if (task.status === 'completed') {
                // building blocks
                const completedLI = document.createElement('li');
                completedLI.className = 'task-item';
                const completedBlock = document.createElement('div');
                completedBlock.className = 'task-item-block';

                //   content
                const checkboxSpan = document.createElement('span');
                const checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkboxSpan.className = 'task-checkbox';
                checkboxSpan.appendChild(checkbox);

                const nameSpan = document.createElement('span');
                nameSpan.className = 'task-name';
                nameSpan.innerText = task.name;

                const statusSpan = document.createElement('span');
                statusSpan.className = 'task-status';
                statusSpan.innerText = task.status;

                const dateSpan = document.createElement('span');
                dateSpan.className = 'task-date';
                dateSpan.innerText = task.created_date;

                // add list item
                completedBlock.appendChild(checkboxSpan);
                completedBlock.appendChild(nameSpan);
                completedBlock.appendChild(statusSpan);
                completedBlock.appendChild(dateSpan);

                completedLI.appendChild(completedBlock);
                completedUL.appendChild(completedLI);
            }
        });
    }
})();