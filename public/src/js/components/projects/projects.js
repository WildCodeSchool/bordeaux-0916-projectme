((app) => {

    app.component('projets', {
        bindings: {
            blogs: '<'
        },
        templateUrl: 'src/js/components/projets/projets.html',
        controller: ['projectsService', function(projectsService) {
            angular.extend(this, {
                $onInit() {

                    this.begin = 0;
                    this.limit = 3;
                    this.title = "Blog"

                    projectsService.get().then((res) => {
                        this.blogs = res.data
                        console.log(this.blogs)
                    })

                },
                // Pagination
                next() {

                  this.limit ++
                     (this.begin < this.blogs.length -1 ? this.begin ++ : this.begin = 0)
                }

                // prev() {
                //     if (this.begin < this.blogs.length - 1) this.begin--;
                //     else this.begin == this.blogs.length;
                // }
            })
        }]
    })

})(angular.module('app.projets'))
