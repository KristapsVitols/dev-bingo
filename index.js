const ppl = [
    {name: 'Rolands', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Kristaps', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Dāvis', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Anrijs', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Kaspars', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Iļja', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Viktors', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Lauma', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Kristīne', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Jānis', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Einārs', shifts: [{type: 'morning', 'struggledAt' : ''}]},
    {name: 'Dmitrijs', shifts: [{type: 'morning', 'struggledAt' : ''}]},
];

/**
 * Ir 5 maiņas. Kaut kā∂as 2-3 vakara mainas un attiecīgi 2-3 rīta maiņas
 * Sākumā katram vajag dabūt savu shift, lai visiem ir 1 shift.
 * Sanāk, ka ir 2 layers of conditions: 1. cik kopā shifts un 2. cik morning/evening
 *
 *
 *
 */