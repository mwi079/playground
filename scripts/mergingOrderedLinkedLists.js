function mergeLists(head1, head2) {
  
    let result = new SinglyLinkedListNode(0)
    let current = result
    
    while(head1 !== null && head2 !== null) {
        if (head1.data < head2.data) {
            current.next = head1
            head1 = head1.next
        } else {
            current.next = head2
            head2 = head2.next
        }
        current = current.next
    }
    
    if (head1 !== null) {
        current.next = head1
    } else if (head2 !== null) {
        current.next = head2
    }
    
    return result.next
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};