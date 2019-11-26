const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });

    test("returns false if the book does not exist in the list", () => {
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });
  });

});

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("T")).toBe(5);
    });
  
    test("returns 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
  });



  describe("catalogueService.countBooksByKeyword", () => {
    test("returns the number of books that contain the keyword", () => {
      expect(catalogueService.countBooksByKeyword("Assassin")).toBe(3);
    });
  

    test("returns the number of books that contain the keyword", () => {
      expect(catalogueService.countBooksByKeyword("Normal")).toBe(2);
    });

      test("returns the number of books that contain the keyword", () => {
        expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
      });

      test("returns the number of books that contain the keyword", () => {
        expect(catalogueService.countBooksByKeyword(2666)).toBe(1);
      });

      test("returns the number of books that contain the keyword", () => {
        expect(catalogueService.countBooksByKeyword([1, 2, 3])).toBe(0);
      });
  
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns a list of books by a particular author", () => {
  expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
    "A Tale of Two Cities by Charles Dickens",
    "Oliver Twist by Charles Dickens",
    "Great Expectations by Charles Dickens"
  ]);
});
});