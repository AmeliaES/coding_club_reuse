const accordionDataRepeatable = [
  {
    heading: '1. Make sure you can find it (in space)',
    content: `
      <p>Your code must be stored publicly and shared with collaborators. It has a unique persistent identifier, so that everyone can find it and access it.</p>
      <p><strong>See also</strong>:
        <a href="https://book.the-turing-way.org/reproducible-research//vcs">Version Control</a>
      </p>
    `,
  },
  {
    heading: '2. Make sure you can find it (in time)',
    content: `
      <p>Ideally the temporal evolution of the code is documented with version control. This allows you to retrieve a specific version from the past.</p>
      <p><strong>See also</strong>:
        <a href="https://book.the-turing-way.org/reproducible-research//vcs">Version Control</a>
      </p>
    `,
  },
  {
    heading: '3. Make sure you can execute the same sequence of operations',
    content: `
      <p>Often the human who set up the environment is also the one who wrote the code and the one who knows the exact order of steps needed to be able to re-run the code and reproduce the results. This could surely be carefully documented for another human to re-do it.</p>
      <p><strong>See also</strong>:
        <a target="_blank" rel="noreferrer" href="https://coderefinery.github.iohttps://book.the-turing-way.org/reproducible-research//">
          CodeRefinery lesson on Reproducible Research
        </a>
      </p>
    `,
  },
  {
    heading:
      '4. Make sure your environment and sequence of operations is robust and no human is needed to replicate what was done',
    content: `
      <p>You do not want to depend on humans. They tend to make errors even if they do not have bad intentions. So you want your environment to be scripted and be re-created when needed and you want your sequence of operations to be run by a pipeline script that glues together all the sequence of steps. A nice side-effect of scripting the sequence of operations is that this often can serve as documentation of the steps.</p>
      <p><strong>See also</strong>:
        <a href="https://book.the-turing-way.org/reproducible-research//renv/renv-options">Capturing Computational Environments</a>
      </p>
    `,
  },
  {
    heading: '5. License your code',
    content: `
      <p>Make sure you attach a license to your code and specify how you want to be cited when people re-use it. Consider using a permissive license that allows for reuse. Also, you should choose a license which is compatible with the licenses of libraries or packages your software depends on.</p>
      <p><strong>See also</strong>:
        <a href="https://book.the-turing-way.org/reproducible-research//licensing">Licensing</a>,
        <a href="https://book.the-turing-way.org/reproducible-research//licensing#rr-licensing-floss">What is ‘Free/Libre’ or ‘Open Source’ software?</a>,
        <a href="https://book.the-turing-way.org/reproducible-research//licensing/licensing-compatibility">License Compatibility</a>
      </p>
    `,
  },
  {
    heading: '6. Make sure it is citable',
    content: `
      <p>Make sure to specify how you want to be cited when people re-use it.</p>
      <p><strong>See also</strong>:
        <a href="/communication/citable/citable-cite#cm-citable-cite-software">Citing Software</a>
      </p>
    `,
  },
  {
    heading: '7. Include necessary data',
    content: `
      <p>If the software depends on any sort of data, the data should be available.</p>
      <p><strong>See also</strong>:
        <a href="https://book.the-turing-way.org/reproducible-research//rdm/rdm-data">Research Data</a>
      </p>
    `,
  },
];

const accordionDataRerunnable = [
  {
    heading: '1. Remove hardcoded bits and make the code modular',
    content: `
      <p>
        You do not want to have details specific to your data or analysis
        parameters hardcoded into the code. If something can become a reusable
        function, separate it from the hardcoded parameters and turn it into
        something (re)usable on its own. Make the modules pure: given the same
        input, a pure function always returns the same value. Instead of
        specifying file paths inside the scripts, consider passing them as
        command line arguments for a more portable and general and reusable
        script.
      </p>
      <p>
        <strong>See also</strong>:
        <a
          target="_blank"
          rel="noreferrer"
          href="https://cicero.xyz/v3/remark/0.14.0/github.com/coderefinery/modular-code-development/master/talk.md/#1"
          >CodeRefinery Modular Code Development lesson</a
        >
      </p>
    `,
  },
  {
    heading:
      '2. Test that the modules you made can take different types of input data or parameters',
    content: `
      <p>
        You might not know yet how your code will be re-used in the future, but
        you can prevent how it should not be used if you can test which
        parameters are allowed.
      </p>
      <p>
        <strong>See also</strong>:
        <a
          target="_blank"
          rel="noreferrer"
          href="https://coderefinery.github.io/testing/motivation/"
          >CodeRefinery lesson on Automated testing</a
        >
      </p>
    `,
  },
  {
    heading: '3. Turn the modules into a package/toolbox',
    content: `
      <p>
        Separate even more the specifics of your project with the bits that can
        be reused in other of your projects or by other people.
      </p>
      <p>
        <strong>See also</strong>:
        <a href="https://book.the-turing-way.org/reproducible-research//renv/renv-package">Package Management Systems</a>,
        <a
          target="_blank"
          rel="noreferrer"
          href="https://scicomp.aalto.fi/scicomp/packaging-software/"
          >Packaging software</a
        >,
        <a
          target="_blank"
          rel="noreferrer"
          href="https://aaltoscicomp.github.io/python-for-scicomp/packaging/"
          >Software packaging in Python</a
        >
      </p>
    `,
  },
];

const accordionDataPortable = [
  {
    heading: '1. Make sure you can recreate the environment where it lived',
    content: `
      <p>
        The environment is a fragile snapshot in time which silently accompanies
        the code. It can include the human who operated the software, the steps
        the human did to prepare the data, the hardware, the OS, the libraries,
        external packages/toolboxes/dependencies. All this can be carefully
        documented for another human to re-do all the same exact steps.
      </p>
      <p>
        <strong>See also</strong>:
        <a href="https://book.the-turing-way.org/reproducible-research//renv"
          >Reproducible Environments</a
        >
      </p>
    `,
  },
];

const accordionDataExtendable = [
  {
    heading: '1. Make sure your code is readable by humans',
    content: `
      <p>
        It often pays more to write code for other humans so they can read it
        (including your future self). A cryptic oneliner with obscure variable
        names is not any faster or more efficient than splitting the one liner
        into multiple steps with readable variable names that make sense.
        Furthermore, using coding conventions will help other readers.
      </p>
      <p>
        <strong>See also</strong>:
        <a
          href="https://book.the-turing-way.org/reproducible-research//code-quality/code-quality-style#rr-code-style-and-formatting"
          >Automatic formatting</a
        >,
        <a
          href="https://book.the-turing-way.org/reproducible-research//code-quality#rr-code-quality-advantages"
          >Advantages of Static code analysis</a
        >
      </p>
    `,
  },
  {
    heading: '2. Make sure comments are present',
    content: `
      <p>
        Write comments before writing the actual code. Imagine that somebody
        could just read the comments and skip all the code bits between comments
        and get a full picture of what is going on as if they read the whole
        code.
      </p>
    `,
  },
];

function createAccordion(container, data) {
  const accordion = document.createElement('div');
  accordion.className = 'accordion';

  data.forEach((section, i) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';

    const headerId = `heading-${container.id}-${i}`;
    const collapseId = `collapse-${container.id}-${i}`;

    const header = document.createElement('h3');
    header.className = 'accordion-header';
    header.id = headerId;

    const button = document.createElement('button');
    button.className = 'accordion-button collapsed';
    button.type = 'button';
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', `#${collapseId}`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', collapseId);
    button.innerHTML = section.heading;

    header.appendChild(button);
    item.appendChild(header);

    const collapseDiv = document.createElement('div');
    collapseDiv.id = collapseId;
    collapseDiv.className = 'accordion-collapse collapse';
    collapseDiv.setAttribute('aria-labelledby', headerId);

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.innerHTML = section.content;

    collapseDiv.appendChild(body);
    item.appendChild(collapseDiv);

    accordion.appendChild(item);
  });

  container.appendChild(accordion);
}

// Call function for each container and dataset
createAccordion(
  document.getElementById('accordion-container-repeatable'),
  accordionDataRepeatable
);
createAccordion(
  document.getElementById('accordion-container-rerunnable'),
  accordionDataRerunnable
);
createAccordion(
  document.getElementById('accordion-container-portable'),
  accordionDataPortable
);
createAccordion(
  document.getElementById('accordion-container-extendable'),
  accordionDataExtendable
);
