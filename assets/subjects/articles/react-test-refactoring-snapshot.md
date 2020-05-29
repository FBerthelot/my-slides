<img alt="The refactor cowboy" src="/illustrations/cowboy.jpg" class="main-image" />

Once upon a time there was a cowboy developer. Whenever he went to a new town, he shot the legacy code faster than its shadow.

When the cowboy join a product team and discover the code base, he always refactor everything.
He is a contractor, so he join a team for that purpose, refactor and improve software quality.

While the cowboy discover the legacy code, he tend to refactor everything by adding test. At the end his refactoring as always some edge case that he was not aware of and here it is, even if he add tests and write cleaner code he introduced some bugs :fearful:.


What's wrong with his process ?

There is two majors breach in his way of refactoring :
 - Cowboy refactor a whole system without knowing the exact behavior
 - Cowboy test his code according to the refactoring code not according to both legacy and new code.

 While the breach assumption is hard to fix, we will improve the cowboy process by changing the way he refactor.

## Testing legacy code

First step to successfully refactor a piece of code is to add tests to the legacy code. But test should always refer to a behavior with empathize the user. It's impossible to do that when we don't know it!

We should find another way to achieved that. First tool we will use is the jest snapshot testing.

What is a snapshot test ? It's simple:
- Take a picture of a component
- When modifying code, run test
- The picture of the component should look exactly the same.

It's mean the output of the component should be the same before and after the refactor. Let's try this with some code.

We will take as an example an imaginary application our cowboy use for counting cow and have some data on them.

<iframe
     src="https://codesandbox.io/embed/github/FBerthelot/my-cows-react-refactoring-kata/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="my-cows-react-refactoring-kata"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-autoplay"
   >
</iframe>

As you can see, the application is quite simple but it doesn't rely at all on the React as no components has been created. So the first thing we want to do is to Create a Cow Component, but we need to add test about this code before making any change.

### Render the component to get a snapshot

In the React ecosystem, there is 2 majors libraries to test component: Enzyme and @testing-library.
I also created [my own library, component-test-utils](https://component-test-utils.berthelot.io/) earlier this year and I will write the tests with each library so you can have the one you use as an example.

Whatever your test library make sure to render the all react tree and not only one component, so please *do not use any mock while you refactoring*.

```jsx
import App from "./App";
import React from "react";
import renderer from "react-test-renderer";
import {shallow} from "component-test-utils-react";
import {render} from "@testing-library/react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// React test render
describe("App - react-test-render - Reafactoring Tests", () => {
  it("should look the same", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


// Enzyme
describe("App - enzyme - Reafactoring Tests", () => {
  it("should look the same", () => {
    const component = mount(<App />);
    expect(component.html()).toMatchSnapshot();
  });
});

// component-test-utils-react
describe("App - component-test-utils-react - Reafactoring Tests", () => {
  it("should look the same", () => {
    const component = shallow(<App />, {blackList: true});
    expect(component.html({snapshot: true})).toMatchSnapshot();
  });
});

// @testing-library
describe("App - @testing-library/react - Reafactoring Tests", () => {
  it("should look the same", () => {
    const {container} = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

When executing the test for the first time, jest will create `__snapshots__` folder with a copy of your react tree. If you make any change, jest will verify if the new code generate the same react tree.


### Create a Cow Component

Now we can start develop a cow component as usual using TDD.

```jsx
import React from 'react';
import {Cow} from './Cow';
import {shallow} from "component-test-utils-react";

describe('Cow', () => {
  const cow = {
    name: 'Margueritte',
    location: 'Field A',
    description: 'She smile to me, it\'s weird.',
    image: 'http://toto.toto.com'
  }
  it('should display cow name', () => {
    const component = shallow(<Cow cow={cow}/>);
    expect(component.html()).toContain(cow.name);
  });

  it('should display where the cow is', () => {
    const component = shallow(<Cow cow={cow}/>);
    expect(component.html()).toContain(cow.location);
  });

  it('should display the cow\'s description', () => {
    const component = shallow(<Cow cow={cow}/>);
    expect(component.html()).toContain(cow.description);
  });

  it('should display the cow\'s image', () => {
    const component = shallow(<Cow cow={cow}/>);
    expect(component.html()).toContain(cow.image);
  });
})
```


As you can see we test that each data we send to the component is displayed no matter the html tree is. The Cow component is very simple, nothing special here.

```jsx
import React from 'react';

export const Cow = ({cow}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={cow.image} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{cow.name}</p>
            <p className="subtitle is-6">{cow.location}</p>
          </div>
        </div>

        <div className="content">{cow.description}</div>
      </div>
    </div>
  );
}
```


### Use cow component

The cow component is ready now, it's time for our cowboy to destroy old code and use his nex cow card.

```jsx
import React from "react";
import "bulma";
import "./styles.css";
import {Cow} from './Cow';

export default function App() {
  const cows = [
    {
      name: 'Margueritte',
      image: 'https://lh3.googleusercontent.com/eLxDr87icLAQlzF2LFIig62i46hm7f8sH77zIaZX6t64kFsjHlok6QMyCiReOzBcfpkPTZSv3g=w640-h400-e365',
      location: 'Field A',
      description: 'She love organize poker game in the basment of the farm.'
    },
    {
      name: 'Thérèse',
      image: 'https://image.posterlounge.fr/img/products/650000/649832/649832_poster_l.jpg',
      location: 'Field A',
      description: 'During the confinement, her hair grown up significantly.'
    },
    {
      name: 'Evelyne',
      image: 'https://oldmooresalmanac.com/wp-content/uploads/2017/11/cow-2896329_960_720-Copy-476x459.jpg',
      location: 'Field B',
      description: 'She smile to me, it\'s weird.'
    }
  ];


  return (
    <div className="App">
      <h1>MY COWS</h1>

      <section className="cows">
        {
          cows.map(cow => {
            return <Cow cow={cow} key={cow.name} />;
          })
        }
      </section>
    </div>
  );
}
```

When refactoring this code, we are confident because we are certain to generate the same html output because of our snapshot tests.

### Delete snapshot

Refactoring is done, so we don't need anymore the snapshot tests. They bring us poor value and DOM is something very versatile, the html structur will change. Those tests will bring lot of false negative result, lot of noise while changing some html/css.

I even seen a developer stop doing front-end tests because of that, and our cowboy doesn't want to annoy other developer with flaky test.


So make sure to do `rm ./src/App.snapshot.spec.js` after a refactoring like this.


## What's next?

In this first article our cowboy refactor a very simple piece of code, there is no logic in this app. The next article we will complexify our cow application to refactor. To accomplish that, we will introduce another tool to do property-based-testing.


Stay tuned!


----------

The code of [the repository is here](https://github.com/FBerthelot/my-cows-react-refactoring-kata) and you can navigate between steps with a branch system.
