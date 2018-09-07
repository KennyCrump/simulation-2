-- INSERT INTO houses (name, address, city, state, zip, mortgage, rent, img)
INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
VALUES(${name}, ${address}, ${city}, ${state}, ${zip}, ${img}, ${mortgage}, ${rent});

SELECT * FROM houses