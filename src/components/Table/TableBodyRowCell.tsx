import React, { useCallback, useState } from "react";

interface Props {
  readonly content: string;
  readonly index: number;
}

export const TableBodyRowCell = ({ content, index }: Props): JSX.Element => {
  const [uriImg, setUriImg] = useState("/logo192.png");

  const handleChangeImage = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    const reader = new FileReader();

    reader.onload = function () {
      setUriImg(reader.result as string);
    };

    input.onchange = function (_) {
      const files = input.files as FileList;

      if (!files[0]) return;

      reader.readAsDataURL(files[0]);
    };

    input.click();
  }, []);

  return (
    <div
      className="t-row-body-el"
      style={{ justifyContent: index === 0 ? "flex-start" : "flex-end" }}
    >
      {index === 1 && (
        <img
          className="t-row-body-img"
          src={uriImg}
          alt="Profile of user"
          onClick={handleChangeImage}
        />
      )}
      <span>{content}</span>
    </div>
  );
};
