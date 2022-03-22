import impuesto_total_ca from './impuesto_total_ca.js';
import porcentaje_descuento from './porcentaje_descuento.js';

describe("Totalizador", () => {
    it("devuelve impuesto de los productos", () => {
        expect(impuesto_total_ca(10000,6.65)).toEqual(665);
    });
    it("devuelve descuento de los productos", () => {
        expect(porcentaje_descuento(7000, 5)).toEqual(0.35);
    });
});
