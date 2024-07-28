function LinkedListFactory() {
    let head = null;
    let length = 0;


    return {
        append,
        indexOf,
        insertAt,
        remove,
        removeAt,
        toString,
        pop,
    };



    
    function append(element) {
        const node = {
            element,
            next: null
        }
        
        if (head===null){
            head = node;
        } else {
            let currentNode = head;
            while(currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            
            currentNode.next = node;
        }
        length++;
        
        
        
    }
    
    function indexOf(element) {
        let nodeIndex = 0;
        let currentNode = head;
        
        while (currentNode) {
            if (element === currentNode.element) {
                return nodeIndex;
            }
            
            nodeIndex++;
            
            currentNode = currentNode.next;
        }
        
        return -1;
        
        
        
        
        
    }
    
    function insertAt(position, element) {
        const isPositionInTheRange = position > -1 && position <=length;
        
        if (!isPositionInTheRange) {
            return false;
        }
        
        const node = {
            element,
            next: null
        }
        
        let currentNode = head;
        
        const isHeadPosition = position === 0;
        
        if (isHeadPosition) {
            node.next = currentNode;
            head = node;
            
        } else {
            let previousNode = null;
            let index = 0;
            
            while (index++ < position) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                
            }
            
            previousNode.next = node;
            node.next = currentNode;
        }
        
        length++;
        return true;
    }
    
    function remove(element) {
        const elementIndex = indexOf(element);
        return removeAt(elementIndex);
        
    }

    function pop() {

        return removeAt(length-1);
    }
    
    function removeAt(position) {
        const isPositionInTheRange = position > -1 && position <= length;
        if (!isPositionInTheRange) {
            return false;
        }
        
        let currentNode = head;
        const isHeadPosition = position === 0;
        
        if (isHeadPosition) {
            head = currentNode.next;
        } else {
            let previousNode = null;
            let index = 0;
            
            while (index++ < position) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                
            }
            
            previousNode.next = currentNode.next;
        }
        
        length--;
        return currentNode.element;
        
    }
    
    function toString() {
        let result = "";
        let current = head;
        
        while (current) {
            result += `${current.element}${current.next ? ", " : ""}`
            current = current.next;
        }
        
        return result;
    }
    
}

export default LinkedListFactory;