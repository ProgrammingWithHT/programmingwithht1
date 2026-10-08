#include <iostream>
#include <conio.h>
using namespace std;

const double toll = 0.5;

const double hwToll = 1.5;
const double lwToll = 0.5;

class TollBoth
{
private:
    unsigned int Total_Cars;

    unsigned int totalHwVehicles;
    unsigned int totalGovVehicles;
    unsigned int totalLwVehicles;

    double totalCashHwVehicles;
    double totalCashGovVehicles;
    double totalCashLwVehicles;

    double Total_Cash;

public:
    TollBoth()
    {
        Total_Cars = 0;
        Total_Cash = 0;

        totalHwVehicles = 0;
        totalGovVehicles = 0;
        totalLwVehicles = 0;

        totalCashHwVehicles = 0;
        totalCashGovVehicles = 0;
        totalCashLwVehicles = 0;
    }

    void LV_Vehicle()
    {
        Total_Cars++;
        totalLwVehicles++;

        Total_Cash += lwToll;
        totalCashLwVehicles += lwToll;
    }

    void HT_Vehicle()
    {
        Total_Cars++;
        totalHwVehicles++;

        Total_Cash += hwToll;
        totalCashHwVehicles += hwToll;
    }

    void GOV_Vehicle()
    {
        Total_Cars++;
        totalGovVehicles++;

        //Missed revenue
        totalCashGovVehicles += 0.5;
    }

    void Highest_Revenue()
    {   
        if (totalCashHwVehicles > totalCashLwVehicles)
            cout<<"Heavy Weight Vehicles";
        else if(totalCashHwVehicles < totalCashLwVehicles)
            cout<<"Light Weight Vehicles";
        else
            cout<<"Both Are Equal Revenue";
    }

    void display()
    {
        cout << "Total number of cars: " << Total_Cars << endl;
        cout << "Total cash collected: " << Total_Cash << endl;

        cout << "Total number of heavy weight vehicles: " << totalHwVehicles << endl;
        cout << "Total cash collected for heavy weight vehicles: " << totalCashHwVehicles << endl;

        cout << "Total number of light weight vehicles: " << totalLwVehicles << endl;
        cout << "Total cash collected for light weight vehicles: " << totalCashLwVehicles << endl;

        cout << "Total number of gouvernment vehicles: " << totalGovVehicles << endl;
        cout << "Revnue to be collected from govournment: " << totalCashGovVehicles << endl;

        cout << "Highest Revenue: ";
        Highest_Revenue();
    }
};

int main()
{
    TollBoth tollboth;
    char ch ;
    cout << "Enter 0 for each Gouvernment car" << endl;
    cout << "Enter 1 for each Light-Weight car" << endl;
    cout << "Enter 2 for each Heavy-Weight car" << endl;
    cout << "Press ESC to exit" << endl;

     while (getch()!=27)
    {
        cin >> ch;
        if (ch == '0')
        {
            tollboth.GOV_Vehicle();
        }
        if (ch == '1')
        {
            tollboth.LV_Vehicle();
        }

        if (ch == '2')
        {
            tollboth.HT_Vehicle();
        }
    }
    tollboth.display();
    return 0;
}