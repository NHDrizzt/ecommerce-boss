import { formatCurrencyText } from '../utils/formattingNumber';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('should click on the first item on the products section and check if span element of the bag icon in the header has added a number one to it', () => {
    cy.get('[data-test-id="grid-products"]').first().within(() => {
      cy.get('button').click()
    })

    cy.get('[data-test-id="cart-length"]').should('have.text', '1')
  })

  it('should click on the first and second item on the products section and check if span element of the bag icon in the header has added a number 2 to it', () => {
    cy.get('[data-test-id="grid-products"]').first().within(() => {
      cy.get('button').click()
    })
    cy.get('[data-test-id="grid-products"]').eq(1).within(() => {
      cy.get('button').click()
    })
    cy.get('[data-test-id="cart-length"]').should('have.text', '2')
  })

  it('should open cart modal when the bag icon is clicked', () => {
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').should('be.visible');
  });

  it('should check if all default texts inside the cart are correct', () => {
    const formattedValue = formatCurrencyText(0);
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').should('contain.text', 'Cart');
    cy.get('#cart-modal').should('contain.text', 'Total Value');
    cy.get('#cart-modal').within(() => {
      cy.get('p#cart-total-value').should('have.text', formattedValue);
    })
  })

  it('should add an item to the cart and check if the total value is correct', () => {
    const formattedValue = formatCurrencyText(7800);
    cy.get('[data-test-id="grid-products"]').first().within(() => {
      cy.get('button').click()
    })
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').within(() => {
      cy.get('p#cart-total-value').should('have.text', formattedValue);
    })
  })

  it('should add an item to the cart and check if the item is displayed correctly', () => {
    cy.get('[data-test-id="grid-products"]').first().within(() => {
      cy.get('button').click()
    })
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').should('contain.text', 'Green Airoo 1');
    cy.get('#cart-modal').should('contain.text', 'Quantity: 1');
  })

  it('should add an item to the cart and remove it', () => {
    cy.get('[data-test-id="grid-products"]').first().within(() => {
      cy.get('button').click()
    })
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').within(() => {
      cy.get('button#remove-item-button').click();
    })
    cy.get('#cart-modal').should('not.contain.text', 'Green Airoo 1');
  })

  it('should add an item to the cart and increase its quantity and the total value went up multiplied by the same amount', () => {
    const formattedValue = formatCurrencyText(15600);
    cy.get('[data-test-id="grid-products"]').first().within(() => {
      cy.get('button').click()
    })
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').within(() => {
      cy.get('button#add-item-button').click();
      cy.get('[data-test-id="item-quantity"]').should('have.text', 'Quantity: 2');
    })
    cy.get('#cart-modal').should('contain.text', formattedValue);
  })
  it('should check if local storage has the correct value', () => {
    const formattedValue = formatCurrencyText(15600);
    cy.get('[data-test-id="grid-products"]').first().within(() => {
      cy.get('button').click()
    })
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').within(() => {
      cy.get('button#add-item-button').click();
    })
    cy.reload();  
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').should('contain.text', 'Green Airoo 1');
    cy.get('#cart-modal').should('contain.text', 'Quantity: 2');
    cy.get('#cart-modal').should('contain.text', formattedValue);
  })

  it('should check if the cart modal closes when the bag icon is clicked again', () => {
    cy.get('button#cart-icon').click();
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').should('not.exist');
  })

  it('should add all the 6 items from the products section to the cart and check if the total value is correct', () => {
    const formattedValue = formatCurrencyText(46800);
    cy.get('[data-test-id="grid-products"]').each((product) => {
      cy.wrap(product).find('button').each((button) => {
        cy.wrap(button).click();
      });
    });
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').within(() => {
      cy.get('p#cart-total-value').should('have.text', formattedValue);
    })
  })

  it('should close the cart modal when the user clicks outside of it', () => {
    cy.get('button#cart-icon').click();
    cy.get('body').click(0, 0);
    cy.get('#cart-modal').should('not.exist');
  })

  it('should add the first and second element of products, reload the page. then try to remove the last elemnent and check if the first element is still in the cart', () => {
    cy.get('[data-test-id="grid-products"]').first().within(() => {
      cy.get('button').click()
    })
    cy.get('[data-test-id="grid-products"]').eq(1).within(() => {
      cy.get('button').click()
    })
    cy.reload();
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').within(() => {
      cy.get('button#remove-item-button').eq(1).click();
    })
    cy.get('#cart-modal').should('contain.text', 'Green Airoo 1');
  })

  it('should open the cart modal then closes by clicking on the same icon button', () => {
    cy.get('button#cart-icon').click();
    cy.get('button#cart-icon').click();
    cy.get('#cart-modal').should('not.exist');
  })

})  