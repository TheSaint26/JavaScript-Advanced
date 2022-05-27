function factory(lib, list) {
    //for every order in list
    //- create object
    //- copy template props
    //- for every element in parts 
    //-- compose function from library into object
    //-store object

    const result = [];

    for (let order of list) {
        const object = {};
        const template = order.template;
        for (let prop in template) {
            object[prop] = order.template[prop];
        }

        const parts = order.parts;

        for (let order of parts) {
            object[parts] = lib[parts];
        }
    }

    console.log(result);

    //return result
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  console.log(products);
  