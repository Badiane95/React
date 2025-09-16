import { describe, it, expect, vi } from "vitest";
import { fetchAutoEcoles } from "../../src/api/autoEcoles";

describe("fetchAutoEcoles", () => {
  it("transforme les données API en { name, city }", async () => {
    const fakeApiResponse = [
      { nom: "Auto-École Paris 15", commune: "Paris" },
      { nom: "Conduite Facile", commune: "Lyon" },
    ];

    // Mock de fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(fakeApiResponse),
      })
    );

    const res = await fetchAutoEcoles();

    expect(res).toEqual([
      { name: "Auto-École Paris 15", city: "Paris" },
      { name: "Conduite Facile", city: "Lyon" },
    ]);

    // Vérifie que fetch a bien été appelé une fois
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("lève une erreur si la requête échoue", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
      })
    );

    await expect(fetchAutoEcoles()).rejects.toThrow(
      "Erreur lors de la récupération des auto-écoles"
    );
  });
});
