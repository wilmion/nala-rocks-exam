import React from "react";

import type { IMetadataCsv } from "@interface/app.interfaces";

interface Props {
  readonly metadata?: IMetadataCsv;
}

export const TableMetadata = ({ metadata }: Props) => {
  if (!metadata) return null;

  return (
    <React.Fragment>
      <br />
      <span className="t-row-body-mtd" style={{ color: metadata.color }}>
        {metadata.value}
      </span>
    </React.Fragment>
  );
};
