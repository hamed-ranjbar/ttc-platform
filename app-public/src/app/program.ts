class material {
  name: string = '';
  number: number = 0;
  link: string = '';
  mandatory: boolean = false;
  max_point: number = 0;
}

class course {
  _id: string = '';
  name: string = '';
  number: number = 0;
  materials!: material[];
}

export class Program {
  _id: string = '';
  name: string = '';
  description: string = '';
  rating: number = 0;
  image_link: string = '';
  courses!: course[];
  institution_id: string = '';
  lecturer_id: string = '';
}

export class Lecturer {
  _id: string = '';
  name = {
    firstName: '',
    lastName: ''
  };
  description: string = '';
  title: string = '';
  image_link: string = '';
}

export class Institution {
  _id: string = '';
  name: string = '';
  description: string = '';
  image_link: string = '';
}