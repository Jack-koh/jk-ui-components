const source = {
  jsx: `import * as React from 'react'
import { Accordion } from "lib/module/lib";

export default function ControlledAccordion() {
  const [toggle, setToggle] = useState(false);

  return (
    <React.Fragment>
      <Accordion expanded={expanded === 0} onChange={handleChange(0)}>
        <Accordion.Summary>Controll 1</Accordion.Summary>
        <Accordion.Collapse>
          Aliqua anim voluptate et ut veniam. Aliqua incididunt velit fugiat non excepteur
          proident non esse et quis laboris qui esse exercitation. Aute minim laboris labore aute
          exercitation aliqua cupidatat. Est ullamco officia adipisicing labore mollit dolor amet
          deserunt magna.
        </Accordion.Collapse>
      </Accordion>

      <Accordion expanded={expanded === 1} onChange={handleChange(1)}>
        <Accordion.Summary>Controll 2</Accordion.Summary>
        <Accordion.Collapse>
          Incididunt et velit duis excepteur nostrud aliqua duis et. Mollit aute dolor
          reprehenderit sit amet ipsum consectetur reprehenderit officia do. Deserunt Lorem fugiat
          veniam cillum deserunt.
        </Accordion.Collapse>
      </Accordion>

      <Accordion expanded={expanded === 2} onChange={handleChange(2)}>
        <Accordion.Summary>Controll 3</Accordion.Summary>
        <Accordion.Collapse>
          Est amet labore officia ad pariatur fugiat ad enim non. Ut dolore adipisicing minim
          cillum aute Lorem ex. Fugiat aute elit amet mollit laboris quis excepteur. Voluptate
          nisi nisi et consectetur irure dolor labore laboris ad minim amet.
        </Accordion.Collapse>
      </Accordion>
    </React.Fragment>
  }
)`,
};

export default source;
