import {
  generatePDFFromElementWithId,
  printFromPDFURI,
} from "@utils/pdf-functions";

//@ts-ignore
global.html2pdf = function () {
  return {
    from: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    outputImg: jest
      .fn()
      .mockResolvedValue("data:image/jpeg;base64,MockImageBase64"),
  };
};

describe("PDF Functions", () => {
  it("Should be a URI", async () => {
    const table = document.createElement("div");
    table.id = "table-test";

    document.body.appendChild(table);

    global.URL.createObjectURL = jest.fn(() => "TEST_DATA");

    const result = await generatePDFFromElementWithId("table-test");

    expect(result).toEqual("TEST_DATA");
  });

  it("Should set iframe and print", () => {
    const iframe = document.createElement("iframe");

    const printSpy = jest.fn();
    global.URL.createObjectURL = jest.fn(() => "TEST_BLOB_URI");

    jest.spyOn(document, "createElement").mockReturnValueOnce(iframe);

    Object.defineProperty(window, "print", { value: printSpy });

    printFromPDFURI("TEST_BLOB_URI");

    expect(iframe.src).toEqual("http://localhost/TEST_BLOB_URI");

    iframe.onload = () => {
      expect(printSpy).toHaveBeenCalled();
    };
  });
});
