class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    insertBefore(item, value) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        let currNode = this.head
        let previousNode = this.head

        while((currNode !== null) && (currNode.value !== value)) {
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            this.insertLast(item)
            return
        }
        previousNode.next = new _Node(item, currNode)
    }

    insertAfter(item, value) {
        if (this.head === null) {
            this.insertFirst(item)
        }

        let currNode  = this.head

        while ((currNode !== null) && (currNode.value !== value)) {
            currNode = currNode.next
        }
        if (currNode === null) {
            this.insertLast(item)
            return
        }
        currNode.next = new _Node(item, currNode)
    }

    insertAt(item, position) {
        if (this.head === null) {
            this.insertFirst(item)
        }

        if (!position) {
            return null
        }

        let curNode = this.head
        let preNode = this.head
        for (let i = 0; i < position; i++) {
            prevNode = curNode
            currNode = currNode.next
        }
        prevNode.next = new _Node(item, currNode)
        return
    }

    insertCycle(item, next) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            let nextNode = this.head
            while (nextNode.next !== null && nextNode.value !== next) {
                nextNode = nextNode.next
            }
            tempNode.next = new _Node(item, nextNode)
        }
    }

    find(item) {
        // start at the head
        let currNode = this.head
        // if the list is empty
        if (!this.head) {
            return null
        }
        // check for the item
        while (currNode.value !== item) {
            // return null if it's the end of the list
            // and the item is not on the list
            if (currNode.next === null) {
                return null
            }
            else {
                // otherwise, keep looking
                currNode = currNode.next
            }
        }
        // found it
        return currNode
    }

    remove(item) {
        // if the list is empty
        if (!this.head) {
            return null
        }
        // if the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        // start at the head
        let currNode = this.head
        // keep track of previous
        let previousNode = this.head

        while ((currNode !== null) && (currNode.value !== item)) {
            // save the previous node
            previousNode = currNode
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currNode.next
    }
}

function main() {
    const SSL = new LinkedList()
    SSL.insertFirst('Apollo')
    SSL.insertFirst('Boomer')
    SSL.insertFirst('Helo')
    SSL.insertFirst('Husker')
    SSL.insertFirst('Starbuck')
    SSL.insertLast('Tauhida')
    SSL.remove('Husker')
    SSL.insertBefore('Athena', 'Boomer')
    SSL.insertAfter('Hotdog', 'Helo')
    SSL.insertAt('Kat', 3)
    SSL.remove('Tauhida')

    display(SLL.head)
    size(SSL)
    isEmpty(SSL)
    findPrevious('Apollo', SSL)
    findLast(SSL)
    reverse(SSL.head)
    find3rdFromLast(SSL)
    MSFIDOCredentialAssertion(SSL.head)

    const cycleList = new LinkedList()
    cycleList.insertFirst('Starbuck')
    cycleList.insertFirst('Starbuck')
    cycleList.insertFirst('Starbuck')
    cycleList.insertCycle('Apollo', 'Boomer')
    cycle(cycleList.head)
}

main()

function display(head) {
    let currNode = head

    while (currNode.next !== null) {
        console.log(currNode.value)
        currNode = currNode.next
    }
    return console.log(currNode.value)
}

function size(list) {
    let count = 0
    let currNode = list.head
    while (currNode.next !== null) {
        count ++
        currNode = currNode.next
    }
    count ++
    return console.log(count)
}

function isEmpty(list) {
    if (list.head === null) {
        return console.log(true)
    }
    return console.log(false)
}

function findPrevious(item, list) {
    let currNode = list.head
    while (currNode.next.value !== item) {
        currNode = currNode.next
    }
    return console.log(currNode.value)

}

function findLast(list) {
    let currNode = list.head
    while (currNode.next !== null) {
        currNode = currNode.next
    }
    return console.log(currNode.value)
}

function reverse(head) {
    if (!head || !head.next) {
        return head
    }
    let nextNode = reverse(head.next)
    head.next.next = head
    head.next = undefined
    return nextNode
}

function find3rdFromLast(list) {
    let currNode = list.head
    let prevNode

    while (currNode.next.next !== null) {
        prevNode = currNode
        currNode = currNode.next
    }
    return console.log(prevNode.value)
}

function middle(head) {
    let double = head
    let single = head

    while (double.next !== null && single.head !== null) {
        double = double.next.next
        single = single.next
    }

    return console.log(single.value)
}

function cycle(head) {
    let double = head
    let single = head

    while (double.next !== null && single.head !== null) {
        double = double.next.next
        single = single.next

        if (single === double) return console.log(true)
    }
    return console.log(false)
}