import React, { useState } from "react";
import { N_Select } from "lib/@types";
import { Content } from "client/layout";
import { Select } from "lib/module/lib";

function SelectPage() {
  const [options, onChange] = useState<N_Select.Data<string>[]>([]);

  const [options1, onChange1] = useState<N_Select.Data<string>[]>([
    { label: "첫번째", value: "1" },
    { label: "두번째", value: "2" },
    { label: "세번째", value: "3" },
    { label: "네번째", value: "4" },
    { label: "다섯번쨰", value: "5" },
    { label: "여섯번쨰", value: "5" },
  ]);

  const [options2, onChange2] = useState<N_Select.Data<string>[]>([
    { label: "첫번째1", value: "1" },
    { label: "두번째1", value: " 2" },
    { label: "세번째1", value: "3" },
    { label: "네번째1", value: "4" },
    { label: "다섯번쨰1", value: "5" },
    { label: "여섯번쨰1", value: "5" },
  ]);

  return (
    <Content>
      <Content.Docs title="Select">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.target as HTMLFormElement);
            console.log([...form.values()]);
          }}>
          {/* <select id="select-1" name="order" multiple>
            <option value="">선택안함</option>
            <option value="caffe latte">카페라테</option>
            <option value="cafe au lait">카페오레</option>
            <option value="espresso">에스프레소</option>
          </select>
          <button type="submit">서밋</button> */}

          {/* <Content.Docs.Article heading="Basic" description="기본 형태의 Select 입니다.">
            <Select id="select-2" multiple name="select" onChange={onChange}>
              <Select.Summary />
              <Select.Options>
                <Select.Item label="첫번째2" value="첫번째" />
                <Select.Item label="두번째2" value="두번째" />
                <Select.Item label="세번째2" value="세번째" />
                <Select.Item label="네번째2" value="네번째" />
                <Select.Item label="다섯번째2" value="다섯번째" />
              </Select.Options>
            </Select>
          </Content.Docs.Article> */}
        </form>

        <Select multiple onChange={onChange1}>
          <Select.Summary />
          <Select.Options options={options1} />
        </Select>
        {/* 
        <Select multiple onChange={onChange2}>
          <Select.Summary />
          <Select.Options>
            {options2.map((el, i) => (
              <Select.Item {...el} key={i}>
                <div>
                  {el.label} {i}
                </div>
              </Select.Item>
            ))}
          </Select.Options>
        </Select>

        <Select multiple>
          <Select.Summary />
          <Select.Options>
            <Select.Item label="안녕하세요" selected className="test">
              <div>안녕하세요</div>
            </Select.Item>
            <Select.Item label="반갑습니다">
              <div>반갑습니다</div>
            </Select.Item>
          </Select.Options>
        </Select> */}
      </Content.Docs>
    </Content>
  );
}

export default SelectPage;
