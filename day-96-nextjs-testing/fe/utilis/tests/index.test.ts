import { cutTextToLength } from "../index";
import { slugify } from "../index";
import { composeArticleSlug } from "../index";
import { extractArticleIdFromSlug } from "../index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

describe("slugify", () => {
  it("replace", () => {
    expect(slugify("Such a lovenly place.")).toBe("such-a-lovenly-place");
  });
  it("replace", () => {
    expect(slugify("Pretty much ?")).toBe("pretty-much-");
  });
  it("number", () => {
    expect(slugify("1 * 9 - 10")).toBe("1-9-10");
  });
});

describe("compose article", () => {
  it("Hello", () => {
    expect(composeArticleSlug(11, "Global Warning")).toBe("global-warning-11");
  });

  it("Number2", () => {
    expect(composeArticleSlug(1890, "120*4987-12")).toBe("120498712-1890");
  });
});

describe("extract article", () => {
  //   it("extract article", () => {
  //     expect(extractArticleIdFromSlug("Example-for-lesson")).toBe("lesson");
  //   });

  it("round2", () => {
    expect(extractArticleIdFromSlug("Hello.My.Pretty.Ugly.exercise")).toBe(
      "exercise"
    );
  });
});
