# LemonPetsAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Methoda of uploading Image using API

TO upload an image we will call a function say onChange() Using which we will get the image e.g
onChange({ target }: Event) {
const { files } = target as HTMLInputElement;
if (files) this.uploadedFile = files[0];
this.uploadImage();
}

and call another function withing say uploadImage() which will help us to posr the image to the server using API e.g
// add file to FormData object
const fd = new FormData();
fd.append('file1', this.uploadedFile);

    // send `POST` request
    console.log(this.uploadedFile);
    console.log(fd);
    fetch('https://api.pets-like.com/img-v1/upload', {
      method: 'POST',
      body: fd,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.updateProfile = json.list[0];
      })
      .catch((err) => console.error(err,));

}
