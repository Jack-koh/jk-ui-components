import React, { useState } from "react";
import { Radio } from "lib/module/lib";

function RadioPage() {
  const [checked, setChecked] = useState(0);
  return (
    <div>
      <Radio.Group
        value={checked}
        onChange={(v) => {
          console.log(v);
          setChecked(v);
        }}>
        <Radio text="텍스트" value={2} />
        <Radio text="첨부파일" value={3} />
      </Radio.Group>
    </div>
  );
}

export default RadioPage;
