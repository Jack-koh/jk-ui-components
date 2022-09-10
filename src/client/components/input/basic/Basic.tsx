import React, { useState } from "react";
import { Input, Select } from "lib/module/lib";
import { Ex } from "client/layout";
import { useForm } from "react-hook-form";
import source from "./source";

export function Basic() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { fistName: "", select: "", selectNative: "" },
  });

  // console.log(errors);
  // console.log(getValues());

  const selected = (e) => {
    const target = e.target as HTMLOptionElement;
    target.selected = !target.selected;
  };

  return (
    <Ex
      source={source}
      st={{ height: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
        {/* <Input {...register("fistName", { required: "필수 입력값입니다.", maxLength: 5 })} /> */}

        {/* <Select {...register("select", { required: "필수 입력값입니다." })} label="select">
          <Select.Summary />
          <Select.Options>
            <Select.Item title="apple" value="apple" />
            <Select.Item title="banana" value="banana" />
            <Select.Item title="carrot" value="carrot" />
            <Select.Item title="grape" value="grape" />
            <Select.Item title="peach" value="peach" />
          </Select.Options>
        </Select> */}

        <select multiple {...register("selectNative", { required: "필수 입력값입니다." })}>
          <option value="apple">apple</option>
          <option value="banana">banana</option>
          <option value="carrot">carrot</option>
        </select>

        <select
          multiple
          onChange={(e) => {
            // console.log(e.target.value);
          }}>
          <option value="apple" onMouseDown={selected}>
            apple
          </option>
          <option value="banana" onMouseDown={selected}>
            banana
          </option>
          <option value="carrot" onMouseDown={selected}>
            carrot
          </option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </Ex>
  );
}
