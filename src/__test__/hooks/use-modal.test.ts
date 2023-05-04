import { useModal } from "@hooks/useModal.hook";

import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("useModal()", () => {
  it("Should custom values", () => {
    const { result } = renderHook(useModal);

    expect(result.current.open).toBe(false);
    expect(result.current.handleOpenModal).toBeInstanceOf(Function);
    expect(result.current.handleCloseModal).toBeInstanceOf(Function);
    expect(result.current.toogleModal).toBeInstanceOf(Function);
  });

  it("Should open is true when execute handleOpenModal", () => {
    const { result } = renderHook(useModal);

    act(result.current.handleOpenModal);

    expect(result.current.open).toBe(true);
  });

  it("Should open is false when execute handleCloseModal", () => {
    const { result } = renderHook(useModal);

    act(result.current.handleOpenModal);
    act(result.current.handleCloseModal);

    expect(result.current.open).toBe(false);
  });

  it("Should open is true and false when execute toogleModal", () => {
    const { result } = renderHook(useModal);

    act(result.current.toogleModal);

    expect(result.current.open).toBe(true);

    act(result.current.toogleModal);

    expect(result.current.open).toBe(false);
  });
});
