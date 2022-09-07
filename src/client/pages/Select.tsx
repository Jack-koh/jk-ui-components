import React from "react";
import { Content } from "client/layout";
import { Select } from "client/components";

function SelectPage() {
  return (
    <Content>
      <Content.Docs title="Select">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.target as HTMLFormElement);
            console.log([...form.values()]);
          }}>
          <Content.Docs.Article
            heading="Basic"
            description="기본 형태의 Select 입니다. selected props로 default 값을 세팅할수 있습니다.">
            <Select.Basic />
          </Content.Docs.Article>

          <Content.Docs.Article heading="Multiple" description="여러개의 값들을 선택할수 있습니다.">
            <Select.Multiple />
          </Content.Docs.Article>

          <Content.Docs.Article
            heading="Controlled"
            description="선택한 값들을 onChange 함수를 통해 받아볼수 있습니다.">
            <Select.Controlled />
          </Content.Docs.Article>

          <Content.Docs.Article
            heading="Custom"
            description="select element를 원하는 스타일로 만들수 있습니다.">
            <Select.Custom />
          </Content.Docs.Article>

          <Content.Docs.Article heading="Basic" description="기본 형태의 Select 입니다.">
            {/* <Select multiple name="select3" onChange={onChange2}>
              <Select.Summary />
              <Select.Options>
                {options2.map((el, i) => (
                  <Select.Item {...el} key={i}>
                    {el.label} {i}
                  </Select.Item>
                ))}
              </Select.Options>
            </Select> */}
          </Content.Docs.Article>

          <button type="submit">서밋</button>
        </form>
      </Content.Docs>
    </Content>
  );
}

export default SelectPage;
