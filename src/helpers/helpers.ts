
/**
 * Add and Remove event listener on multiply elements
 */

export const addEventOnElements = (elements: NodeListOf<any> | HTMLCollection, eventType: string, callback: any) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

export const removeEventOnElements = (elements: NodeListOf<any> | HTMLCollection, eventType: string, callback: any) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].removeEventListener(eventType, callback);
  }
}




