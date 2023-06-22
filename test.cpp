#include <iostream>
using namespace std;

int main()
{

    unsigned short n;
    cin >> n; // n = 6
    unsigned short array[n];

    for (unsigned short i = 0; i < n; i++)
    { // loop from 0 < 6 => [0, 5] or [0, 6[
    }

    for (unsigned short i = 0; i < n - 1; i++)
    { // loop from 0 < 6 - 1(5) => [0, 4] or [0, 5[
    }

    for (unsigned short i = 0; i <= n - 1; i++)
    { // loop from 0 <= 6 - 1(5) => [0, 5]
    }

    return 0;
}