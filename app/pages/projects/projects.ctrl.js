'use strict';

class ProjectsCtrl {
    constructor($database, $pagetitle) {
        this.database = $database;
        this.projects =  this.database.getProjects();
        $pagetitle.changeTitle('Проекты');
        window.scrollTo(0, 0)
    }

}






ProjectsCtrl.$inject = ['$database', '$pagetitle'];

export default ProjectsCtrl;